---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Demystifying the ECMAScript&reg; Specification
info: |
  ## Writing a polyfill.
  Presentation slides for developers to understand how to approach reading and implementing the ECMAScript&reg; Specification.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Demystifying the ECMAScript&reg; Specification

By: Austin Akers

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Introduction

<div class="grid grid-cols-2">
<div>

### Austin Akers
<div v-click="1">

- Husband & Father 👨🏾‍❤️‍👩🏾

</div>
<div v-click="2">

- Senior Software Engineer @ <img src="./spring-health.svg" width="150" style="display: inline-block" />

</div>
<div v-click="3">

- Spending time with family

</div>
<div v-click="4">

- Learning & Contributing to Open Source

</div>
<div v-click="5">

- Dancing (Bboy)

</div>
<div v-click="6">

- Cello

</div>
<div v-click="7">

- Muay Thai

</div>

</div>
<div>

<img style="margin: 0 auto" src="https://avatars.githubusercontent.com/u/11778717?v=4" width="250" />

</div>
</div>

---
transition: slide-up
level: 1
---

# Overview

- Why read the ECMAScript Specification?
- How to approach the Specification?
- Writing a polyfill
- Summary
- Q&A


---

---

# Why read the ECMAScript Specification?
<div class="grid grid-cols-3 gap-4 text-center">

<div v-click="1">

Understand the language
<img class="pt-10" src="https://imagedelivery.net/nGYhisqu4x6SCDrz5V8Qxg/0aecd598-17b5-4caa-f7ac-63ef1c0e6500/public" />

</div>

<div v-click="2">

Challenges our thinking
<img class="pt-10" src="https://imagedelivery.net/nGYhisqu4x6SCDrz5V8Qxg/ffdb4b11-1b04-4c76-bf07-4b5346925f00/public" />

</div>

<div v-click="3">

 Being intentional writing code
 <img class="pt-10" src="https://imagedelivery.net/nGYhisqu4x6SCDrz5V8Qxg/ffb50204-3e01-4388-6a3a-f0f7e648c500/public" />

</div>

</div>

<!-- 
- Helps us understand the innards of the language
- Challenges our way of thinking(abstractions)
- Encourages us to be more intentional writing code
 -->

---
transition: fade-out
---

# How to approach the Specification?

<div class="grid grid-cols-2 gap-4">

<!-- Left side -->
<div>
<div v-click="1">

 1. Create a list your favorite methods

 </div>
<div v-click="3">

 2. Start small, find the smallest spec

 </div>
<div v-click="4">

 3. Read the notes of each method first

 </div>
<div v-click="5">

 4. Read it like pseudo code

</div>
</div>
 <!-- /Left side -->
<!-- Right side -->
<div v-click="2">
 
 - `Array.prototype.push()`
 - `Array.prototype.map()`
 - `Array.prototype.toString()`
 - `parseInt()`
 - `Map()`
 - `Map.prototype.has()`
 - `Object.assign()`
 - `Object.create()`
 - etc.

</div>
<!-- /Right side -->

 </div>

 <Arrow x1="900" y1="115" x2="750" y2="115" v-click="6" />

::right::
 

---
layout: center
class: text-center
---

# Writing a polyfill

<div class="text-center">
Array.prototype.push()
</div>


---

# Summary

- Learned a way to approach the specification
- Wrote a custom polyfill
- Learned how `.push()` actually works

---
layout: center
---

# Q&A

