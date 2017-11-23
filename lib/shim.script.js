const joinConfigJS = (browser = '') => {
    return `
      import React, { Component } from '${browser}';
      export {
        React,
        Component,
      }
    `
}

module.exports = joinConfigJS
