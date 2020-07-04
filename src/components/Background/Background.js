import React from 'react';
import './background.sass';
import "../../styles/_colors.sass"


const HORIZON_Y = 0.8;
const SPACING_Y = 2.4;
const SPACING_X = 40;
const SPACING_SCANLINES = 12;
const SKEW = 7;
const SPEED = 0.014;
const COLOR = [74, 44, 74];

const dynamicCtx = document.createElement('canvas').getContext('2d');
const staticCtx = document.createElement('canvas').getContext('2d');
const screenCtx = document.createElement('canvas').getContext('2d');
const ctxs = [dynamicCtx, staticCtx, screenCtx];

// Define and hydrate the state.
// The rest is filled onResize.
const state = {

  yOffset: 0 };


function onResize() {
  const h = state.h = window.innerHeight * 2;
  const w = state.w = window.innerWidth * 2;
  state.y0 = h * (1 - HORIZON_Y);
  state.nHorizontal =
  Math.pow(h * HORIZON_Y, 1 / SPACING_Y);
  state.nVertical = Math.ceil(w / SPACING_X);
  state.nScanlines = Math.ceil(h / SPACING_SCANLINES);

  // Update the DOM.
  ctxs.forEach(ctx => {
    ctx.canvas.height = state.h;
    ctx.canvas.width = state.w;
  });

  drawStatic();
};

function drawStatic() {
  const { h, w, y0, nVertical } = state;
  const ctx = staticCtx;

  ctx.clearRect(0, 0, w, h);

  // Draw vertical lines.
  for (let n = 0; n < nVertical; ++n) {
    ctx.beginPath();
    const x = nVertical / 2 - n;
    const x1 = x * SPACING_X + w / 2;
    const x2 = x * SPACING_X * SKEW + w / 2;
    ctx.beginPath();
    ctx.moveTo(x1, 0);
    ctx.lineTo(x1, y0);
    ctx.lineTo(x2, h);
    stroke(ctx);
  }

  // Fade the lines on the wall.
  const fade = ctx.createLinearGradient(0, 0, 0, y0);
  fade.addColorStop(0.0, 'rgba(0, 0, 0, 1)');
  fade.addColorStop(0.5, 'rgba(0, 0, 0, 0.65)');
  fade.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, w, y0);



  drawScreenArtifacts();
}

function drawScreenArtifacts() {
  const { h, w } = state;
  const ctx = screenCtx;

  ctx.clearRect(0, 0, w, h);

  // Draw scanlines.
  const strokeOptions = {
    c1: 'rgba(74, 44, 74, 0.16)',
    c2: 'rgba(0, 10, 0, 0.16)' };

  for (let n = 0; n < state.nScanlines; ++n) {
    const y = n * SPACING_SCANLINES;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    stroke(ctx, strokeOptions);
  }

  // Draw glow.
  ctx.beginPath();
  const glow = ctx.createRadialGradient(
  w / 2, h / 2, Math.max(w, h),
  w / 2, h / 2, SPACING_X * 1.5);

  glow.addColorStop(0.2, 'rgba(0, 0, 0, 0.16)');
  glow.addColorStop(1.0, `rgba(${COLOR}, 0.16)`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
}

function drawDynamic() {
  const { h, w, y0, nHorizontal, yOffset } = state;
  const ctx = dynamicCtx;

  ctx.clearRect(0, 0, w, h);

  // Draw horizontal lines.
  for (let n = 0; n < nHorizontal; n++) {
    const y = y0 + 2 + Math.pow(n + yOffset, SPACING_Y);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    stroke(ctx);
  }

  state.yOffset = (yOffset + SPEED) % 1;
}

function drawLoop() {
  requestAnimationFrame(drawLoop);

  if (state.glitched) return;
  drawDynamic();
}

window.addEventListener('resize', throttle(onResize), onResize(), drawLoop(), ctxs.forEach(({ canvas }) => {
  document.body.appendChild(canvas);
}))

// A thin white line gives us a nice glow-y effect.
function stroke(ctx, {
  w1 = 10,
  w2 = 2,
  c1 = `rgba(${COLOR}, 0.5)`,
  c2 = `rgb(${COLOR})` } =
{}) {
  ctx.lineWidth = w1;
  ctx.strokeStyle = c1;
  ctx.stroke();
  ctx.lineWidth = w2;
  ctx.strokeStyle = c2;
  ctx.stroke();
}

// Throttles a function to RAF.
function throttle(cb) {
  let queued = false;

  return (...args) => {
    if (queued) return;

    queued = true;
    requestAnimationFrame(_ => {
      queued = false;
      cb(...args);
    });
  };
}

function Background() {
  return (
    <div className="background"/>
  );
}

export default Background;
