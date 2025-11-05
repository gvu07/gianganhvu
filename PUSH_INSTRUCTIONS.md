# Quick Guide: Using Your Personal Access Token

## Step 1: Run the Push Command
Open your terminal and run:
```bash
cd /Users/gianganhvu/Documents/WEBSITE
git push -u origin main
```

## Step 2: Enter Your Credentials
When prompted, enter:
- **Username**: `gvu07` (your GitHub username)
- **Password**: Paste your Personal Access Token here (NOT your GitHub password)

⚠️ **IMPORTANT**: When you type the password/token, **NOTHING WILL APPEAR ON SCREEN** - this is normal! Git hides what you type for security. Just paste your token and press Enter.

## Step 3: Wait for Completion
After entering your credentials:
- It may take a few seconds to authenticate
- You'll see progress messages like "Writing objects" and percentages
- Wait until you see a message like: "Branch 'main' set up to track remote branch 'main' from 'origin'."
- **DO NOT press Ctrl+C** - let it finish!

## Step 4: Verify It Worked
After successful push, check:
```bash
git status
```
You should see: `Your branch is up to date with 'origin/main'`

Or visit: https://github.com/gvu07/gianganhvu
You should see all your website files there!

## Troubleshooting

### If it still asks for credentials:
Make sure you're copying the **entire token** (it's a long string of letters and numbers)

### If you get "authentication failed":
1. Double-check your token has `repo` permissions
2. Make sure the token hasn't expired
3. Try regenerating the token if needed

### If you see "rejected - non-fast-forward":
This means the remote has different commits. You may need to pull first:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### To update the token later:
Just run `git push` again and enter your new token when prompted.
