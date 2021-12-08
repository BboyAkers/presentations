---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Collaborations in Open Source

By Austin Akers

---

# Overview

<v-clicks at="1">

- 🤹 **Setting Up Your Environment**
- 📝 **General Collaboration Tips**
- 🛠 **Put It Into Practice**
- 📤 **QA**

## Questions?
</v-clicks>



<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Let's Get Started!!

<img src="https://c.tenor.com/fk12394PuMQAAAAd/lets-go-ready.gif" style="height: 400px" />

<style>
h1 {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
}
</style>

---


# Setting Up Your Environment

<div class="container">

<v-clicks at="1">

<div class="item">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" style="height: 150px;" />

## VS Code

</div>

</v-clicks>

<v-clicks at="2">

<div class="item">

<img src="https://gitforwindows.org/img/git_logo.png" style="height: 150px;" />

## Git For Windows (Optional)

</div>

</v-clicks>


</div>

<style>

.container {
  display: flex;
  justify-content: space-evenly;
}

.item {
  display: inline-block;
}

</style>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# General Collab Tips
- 📝 **Break Down Task**
  - Features -> Small Tasks
  - Use Github Project Board
- **Use branches to separate work**
  - `git checkout -b aakers/feature-a`
- **Keep your work updated**
  - Pushing and Pulling
  - `git push origin aakers/feature-a`
  - `git pull origin aakers/feature-a`

Create a branch for each feature
```bash
git branch --b aakers/feature-a
```
To checkout a branch
```bash
git checkout aakers/feature-a
```

---

# Put It Into Practice

<img src="https://c.tenor.com/y2JXkY1pXkwAAAAC/cat-computer.gif">

<style>
h1 {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
---

# Questions?