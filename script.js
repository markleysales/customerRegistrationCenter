'use strict'
const openModal = () => document.getElementById("modal").classList.add("active")
document.getElementById("customersInit").addEventListener("click", openModal)

const closeModal = () => document.getElementById("modal").classList.remove("active")
document.getElementById('modalClose').addEventListener("click", closeModal)