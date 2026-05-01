"""API smoke/regression tests for marketing site root and inquiry flows."""

import os
from pathlib import Path

import pytest
import requests


def _read_frontend_backend_url() -> str:
    env_path = Path("/app/frontend/.env")
    if not env_path.exists():
        pytest.fail("Missing /app/frontend/.env; cannot read REACT_APP_BACKEND_URL")

    for line in env_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            value = line.split("=", 1)[1].strip()
            if value:
                return value.rstrip("/")
            pytest.fail("REACT_APP_BACKEND_URL is empty in /app/frontend/.env")

    pytest.fail("REACT_APP_BACKEND_URL not found in /app/frontend/.env")


BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/") or _read_frontend_backend_url()


@pytest.fixture
def api_client():
    """Requests session for public API testing."""
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


def test_api_root_returns_running_message(api_client):
    """Module: API health/root message validation."""
    response = api_client.get(f"{BASE_URL}/api/")

    assert response.status_code == 200
    data = response.json()
    assert data == {"message": "Ruwan Agro API is running"}


def test_create_inquiry_success_and_no_mongo_object_id(api_client):
    """Module: Contact inquiry creation payload and response-shape validation."""
    payload = {
        "name": "TEST QA User",
        "email": "qa.user@example.com",
        "phone": "9999999999",
        "message": "Testing inquiry submission from automated regression suite.",
    }

    response = api_client.post(f"{BASE_URL}/api/inquiries", json=payload)

    assert response.status_code == 200
    data = response.json()

    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data and isinstance(data["created_at"], str)
    assert "_id" not in data


def test_create_inquiry_invalid_email_rejected(api_client):
    """Module: Inquiry input validation for malformed email."""
    payload = {
        "name": "TEST Invalid Email",
        "email": "not-an-email",
        "phone": "9999999999",
        "message": "Expecting validation error due to malformed email.",
    }

    response = api_client.post(f"{BASE_URL}/api/inquiries", json=payload)

    assert response.status_code == 422
    data = response.json()
    assert "detail" in data


def test_create_status_check_success(api_client):
    """Module: Status creation endpoint contract validation."""
    payload = {"client_name": "TEST status-client"}

    response = api_client.post(f"{BASE_URL}/api/status", json=payload)

    assert response.status_code == 200
    data = response.json()
    assert data["client_name"] == payload["client_name"]
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "timestamp" in data and isinstance(data["timestamp"], str)


def test_get_status_checks_contains_created_record(api_client):
    """Module: Status list endpoint returns previously persisted records."""
    create_payload = {"client_name": "TEST list-verification"}
    create_response = api_client.post(f"{BASE_URL}/api/status", json=create_payload)
    assert create_response.status_code == 200
    created = create_response.json()

    list_response = api_client.get(f"{BASE_URL}/api/status")
    assert list_response.status_code == 200
    items = list_response.json()

    assert isinstance(items, list)
    matching = [item for item in items if item.get("id") == created["id"]]
    assert len(matching) == 1
    assert matching[0]["client_name"] == create_payload["client_name"]
