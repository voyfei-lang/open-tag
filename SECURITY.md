# Security Policy

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues, pull requests, or discussions.** A public report gives attackers a head start.

### Preferred channel — GitHub private vulnerability reporting

Use GitHub's built-in private reporting:

**Security → Report a vulnerability** on the [voyfei-lang/open-tag repository](https://github.com/voyfei-lang/open-tag/security/advisories/new).

This opens a confidential thread between you and the current maintainers. GitHub keeps it private until a fix is published and a CVE, if warranted, is issued.

### Fallback contact

If the private-report link is unavailable, open a minimal public issue asking a maintainer for a private channel. Do **not** include vulnerability details in that issue.

When submitting a private report, include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce or a minimal proof of concept.
- The affected version or commit.
- Any suggested mitigations.

We will use the advisory thread to agree on acknowledgement and remediation timing, and will credit reporters unless they prefer to remain anonymous.

## Supported versions

| Version | Supported |
|---------|-----------|
| Latest main | Yes |
| Older tags | Best-effort; patches may land only on main |

open-tag is early-stage software. Use the latest main commit. A maintainer-controlled replacement for the historical npm daemon package has not been released yet; see [MAINTENANCE.md](MAINTENANCE.md).

## Known security design decisions

- ALLOW_DEV_LOGIN=true mints JWTs with no password and is development-only. NODE_ENV=production disables it as a second line of defense.
- DAEMON_BOOTSTRAP_KEY must be a strong random value before any network-accessible deployment.
- Agent tokens are per-agent secrets hashed with bcrypt and are rotated on every agent turn.

See [docs/authorization.md](docs/authorization.md) for the access-control model and known hardening gaps.

## Out of scope

- Issues already tracked in docs/tech-debt-tracker.md with a Pending or Deferred status, unless you have a working exploit.
- Self-hosted misconfigurations, such as exposing the server to the internet without TLS or a reverse proxy.
