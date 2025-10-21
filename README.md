# Teleprompter Plus

![Teleprompter Plus](https://github.com/AjarnSpencer/teleprompter-plus/raw/main/build/icons/teleprompterplus.png)

A professional grade, multi-platform, free software teleprompter for anyone to use.
- **Note:** This repository is still missing some files and will not yet be ready for release until I (The Author), have uploaded all files, and then tried a fresh install of the teleprompter. However, the index.html file can be used standalone as a simple browser based teleprompter app too for those who wish to try it before it is ready as a repository.
---

[![GitHub license](https://img.shields.io/badge/license-GPL3-blue.svg)](https://github.com/AjarnSpencer/teleprompter-plus/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/release/AjarnSpencer/teleprompter-plus.svg)](https://github.com/AjarnSpencer/teleprompter-plus/releases)
[![GitHub contributors](https://img.shields.io/github/contributors/AjarnSpencer/teleprompter-plus.svg)](https://github.com/AjarnSpencer/teleprompter-plus/graphs/contributors)

## Introduction

"Teleprompter Plus" is built with web technologies so anyone can customize it to their needs. It can be run as a standalone desktop application using Electron.
---
![Teleprompter Plus Reader App](https://github.com/AjarnSpencer/Teleprompter-Plus/blob/main/build/icons/teleprompter-plus-screenshot.png)

## Running from Source

This is the recommended way to run the application if you have cloned this repository.

### Easy Method (Using `start.sh`)

1.  **Make the script executable:**
    ```bash
    chmod +x start.sh
    ```
2.  **Run the script:**
    ```bash
    ./start.sh
    ```
    This will automatically install all necessary dependencies and launch the application.

### Manual Method

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Application:**
    ```bash
    npm start
    ```

## Building Installable Packages (for Distribution)

If you want to build the `.deb`, `.rpm`, or other distributable packages, follow these steps:

1.  **Install Build Dependencies:**
    *   **For `.deb` (Debian/Ubuntu):** No extra dependencies needed.
    *   **For `.rpm` (Fedora/RHEL):** `sudo apt-get install --no-install-recommends -y rpm`
    *   **For other formats:** Refer to the [electron-builder documentation](https://www.electron.build/multi-platform-build#linux).
2.  **Build the Linux Packages:**
    ```bash
    npm run dist:linux
    ```
3.  **Locate the Packages:** The generated packages will be in the `dist/` directory.

## Help & Support

If you have an issue, please open one on the [GitHub issues page](https://github.com/AjarnSpencer/teleprompter-plus/issues).
*   Support e-mail: <ajarnspencer@gmail.com>

## Creators

*   Ajarn Spencer Littlewood <ajarnspencer@gmail.com>
*   Gemini-CLI Unleashed (https://sites.google.com/view/gemini-cli/)

## Copyright

Ajarn Spencer Littlewood & Gemini-CLI Unleashed

## License

This software is shared under the [GPL3](https://github.com/AjarnSpencer/teleprompter-plus/blob/main/LICENSE) license.
