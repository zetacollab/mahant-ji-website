$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$skillDir = Split-Path -Parent $scriptDir
$repoRoot = Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $skillDir))
$frontendDir = Join-Path $repoRoot "frontend"
$firebaseConfig = Join-Path $frontendDir "firebase.json"
$firebaseRc = Join-Path $frontendDir ".firebaserc"

if (-not (Test-Path -LiteralPath $frontendDir)) {
    throw "Frontend directory not found at '$frontendDir'."
}

if (-not (Test-Path -LiteralPath $firebaseConfig)) {
    throw "Missing Firebase Hosting config at '$firebaseConfig'."
}

if (-not (Test-Path -LiteralPath $firebaseRc)) {
    throw "Missing Firebase project config at '$firebaseRc'."
}

Push-Location $frontendDir
try {
    Write-Host "Building frontend from $frontendDir"
    & yarn.cmd build
    if ($LASTEXITCODE -ne 0) {
        throw "Frontend build failed."
    }

    $env:FIREBASE_SKIP_UPDATE_CHECK = "true"
    Write-Host "Deploying Firebase Hosting from $frontendDir"
    & firebase.cmd deploy --only hosting
    if ($LASTEXITCODE -ne 0) {
        throw "Firebase Hosting deploy failed."
    }
}
finally {
    Pop-Location
}
