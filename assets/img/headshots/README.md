# Fellow headshots

Drop headshot image files in this folder, then reference them from
`assets/js/fellows-data.js`.

**Guidelines**

- **Crop:** square (1:1). The card crops to a square and biases toward the top of
  the frame, so leave a little headroom.
- **Size:** at least 600 x 600 px. Anything much larger just slows the page down.
- **Format:** `.jpg` for photos (quality ~80), or `.webp` if you prefer.
- **Filename:** lowercase, hyphenated, no spaces — e.g. `jane-doe.jpg`.

**Then in `assets/js/fellows-data.js`:**

```js
{
  name: "Jane Doe, Ph.D.",
  dept: "Chemical Engineering",
  photo: "assets/img/headshots/jane-doe.jpg",
  bio: "Jane studies ...",
  links: [{ label: "Faculty profile", url: "https://..." }]
}
```

Leave `photo: ""` and a silhouette placeholder is shown instead.
