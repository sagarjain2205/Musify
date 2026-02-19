# 🎧 Musify — Dynamic Web Music Player

Musify is a **Spotify-style web music player** built using **HTML, CSS, and JavaScript**.
It allows users to browse albums, view artist cards, and play songs — all directly in the browser with a clean and modern UI.

---

## 🚀 Features

✨ Clean music player interface
🎵 Album-based song organization
⏯️ Play / Pause / Next / Previous controls
📊 Seekbar with real-time progress
🖼️ Album cover display
📂 Folder-based music loading
⚡ Fully client-side (no backend required)

---

## 🧠 Dynamic Album System (Key Feature)

Musify uses a **dynamic folder-based structure**.

👉 You don’t need to edit complex code to add new music.

Simply create a new folder and Musify will load it as a new album.

---

## 📁 How Albums Work

Each album is just a folder inside the `songs/` directory.

Example:

```
songs/
 ├── seedhe_maut/
 │    ├── cover.jpg
 │    ├── info.json
 │    ├── song1.mp3
 │    └── song2.mp3
 ├── arijit_singh/
 │    ├── cover.jpg
 │    ├── info.json
 │    └── songs...
```

---

## 📄 Required Files in Each Folder

### 🖼️ cover.jpg

Album artwork displayed on the card

### 📜 info.json

Contains album metadata (title, description, etc.)

### 🎶 .mp3 files

Actual songs to be played

---

## ➕ Adding Your Favorite Artist (Very Easy)

1. Create a new folder inside `songs/`

2. Add:

   * `cover.jpg`
   * `info.json`
   * Your `.mp3` files

3. Add the folder name in the code (if required)

That’s it ✅ — the album will appear in Musify.

---

## 🌐 Open Source & Contribution Friendly

Musify is designed to be simple and extensible.

👉 Anyone can contribute by adding new albums or improving features.

You can:

* Add new artist folders
* Improve UI/UX
* Optimize performance
* Add new player features
* Fix bugs
* Customize branding

No complex setup needed — just basic web knowledge.

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript

No frameworks. No backend. Pure frontend project.

---

## 💻 How to Run Locally

Clone the repository:

```
git clone https://github.com/sagarjain2205/Musify.git
```

Open the project folder and run using:

* Live Server (recommended)
* Or open `index.html` directly in a browser

---

## 🎯 Purpose

This project was created as a learning project to demonstrate:

* DOM manipulation
* Dynamic content loading
* Media handling in browsers
* Scalable folder-based design
* Building real-world UI without frameworks

---

## 📌 Future Improvements

* Search functionality
* Shuffle / Repeat modes
* Mobile optimization
* Backend integration

---

## 🤝 Contributing

Contributions are welcome!

If you have an idea or want to add your favorite artist:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.

---

## 👨‍💻 Author

Made with ❤️ by Sagar

---

Enjoy your music 🎶
