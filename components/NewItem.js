"use client";

import { useState } from "react";

export function increment() {
  if (count < 20) {
    setCount(count + 1);
  }
}

export function decrement() {
  if (count > 1) {
    setCount(count - 1);
  }
}

