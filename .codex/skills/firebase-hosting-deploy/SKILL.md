---
name: firebase-hosting-deploy
description: Build and deploy this repository's React frontend to the configured Firebase Hosting project. Use when the user asks to deploy the current site, republish frontend changes, or push the latest frontend build from this repo to Firebase Hosting.
---

# Firebase Hosting Deploy

Run the repo-local deployment script at `.codex/skills/firebase-hosting-deploy/scripts/deploy.ps1`.

## Workflow

1. Confirm the repo is the Mahant Ji website workspace and `frontend/firebase.json` plus `frontend/.firebaserc` exist.
2. Run the deploy script from the repo root. It:
   - enters `frontend/`
   - runs `yarn.cmd build`
   - runs `firebase.cmd deploy --only hosting` with `FIREBASE_SKIP_UPDATE_CHECK=true`
3. Report the Hosting URL from Firebase CLI output.

## Command

```powershell
powershell -ExecutionPolicy Bypass -File .codex/skills/firebase-hosting-deploy/scripts/deploy.ps1
```

## Notes

- Use `yarn.cmd`, not `yarn`, to avoid PowerShell execution-policy failures.
- Deploy from `frontend/` because `firebase.json` and `.firebaserc` live there.
- Request escalated execution for the Firebase deploy step when sandboxed because it needs Google API access.
