---
title: "Python TTS入门指南"
date: 2026-01-17
tags: ["Python", "TTS", "入门"]
summary: "本文介绍如何使用Python进行文本转语音开发，从基础到进阶的完整指南。"
---

# Python TTS入门指南

文本转语音（Text-to-Speech，TTS）是一项将文本转换为语音的技术。Python提供了多种TTS库，本文将介绍几种常用的库和基本用法。

## 常用TTS库

### 1. pyttsx3
pyttsx3是一个跨平台的文本转语音库，支持离线使用。

```python
import pyttsx3

engine = pyttsx3.init()
engine.say("Hello, World!")
engine.runAndWait()
```

### 2. gTTS
gTTS使用Google Translate的API，支持多种语言。

```python
from gtts import gTTS
import os

tts = gTTS(text="Hello, World!", lang='en')
tts.save("hello.mp3")
```

### 3. edge-tts
微软Edge的TTS服务，音质优秀。

```python
import edge_tts

communicate = edge_tts.Communicate(text="Hello, World!", voice="en-US-AriaNeural")
await communicate.save("hello.mp3")
```

## 进阶应用

### 批量转换
可以批量处理文本文件，生成音频文件。

### 语音合成优化
调整语速、音调、音量等参数，获得更好的效果。

## 总结

Python的TTS生态丰富，选择合适的库可以快速实现文本转语音功能。建议从pyttsx3开始，逐步探索更高级的库。
