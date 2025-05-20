## 📐 1. Ejercicio con **Acelerómetro**

### 🔹 Objetivo

Detectar la inclinación del dispositivo en tiempo real y mostrar los valores en los ejes X, Y y Z.

### 🔹 Pasos:

1. Importa `Accelerometer` desde `expo-sensors`.
2. Usa `useEffect` para suscribirte a los datos del acelerómetro.
3. Almacena los datos en el estado (`useState`).
4. Muestra los valores en pantalla.
5. No olvides limpiar la suscripción al desmontar el componente.

### 🔹 Ejemplo de uso

```tsx
import { Accelerometer } from "expo-sensors";

// Detectar inclinación para mover un objeto en la pantalla, cambiar color según el ángulo, etc.
```

---

## 🔁 2. Ejercicio con **Giroscopio**

### 🔹 Objetivo

Leer la rotación del dispositivo en los ejes X, Y y Z.

### 🔹 Pasos:

1. Importa `Gyroscope`.
2. Crea un `useEffect` para escuchar los cambios de rotación.
3. Muestra los valores en pantalla.
4. Úsalo para detectar giros o movimientos circulares.
5. Muestra un cuadrado en la UI.

### 🔹 Ejemplo de uso

```tsx
import { Gyroscope } from "expo-sensors";

// Activar una animación  si el usuario gira el teléfono para rotar el cuadrado.
```

---

## 🧭 3. Ejercicio con **Magnetómetro**

### 🔹 Objetivo

Usar el magnetómetro como una brújula simple.

### 🔹 Pasos:

1. Importa `Magnetometer`.
2. Escucha las coordenadas magnéticas (X, Y, Z).
3. Calcula el ángulo con `Math.atan2`.
4. Muestra el resultado en grados (0–360°).

### 🔹 Ejemplo de uso

```tsx
import { Magnetometer } from "expo-sensors";

// Mostrar una flecha que apunta al norte.
```

---

## 5. Shake Game (Acelerómetro)

Detectar sacudidas (shake) con el Acelerómetro y contabilizar cuántas veces el usuario ha agitado el dispositivo. Al llegar a un número meta, mostrar un mensaje de victoria.

## 📝 Pasos

1. **Instalación**
   Asegúrate de tener `expo-sensors`:

   ```bash
   expo install expo-sensors
   ```

2. **Importaciones**
   En tu componente importa:

   ```tsx
   import React, { useEffect, useState } from "react";
   import { Accelerometer } from "expo-sensors";
   import { View, Text, StyleSheet, Alert } from "react-native";
   ```

3. **Estados**
   Define en el `useState`:

   - `shakeCount` (número de sacudidas actuales).
   - `lastShake` (marca de tiempo de la última sacudida detectada).

4. **Constantes de configuración**

   - `THRESHOLD` = aceleración mínima para considerar una sacudida (por ejemplo, 1.4).
   - `SHAKE_DELAY` = intervalo mínimo (ms) entre sacudidas para no contabilizar rebotes (p.ej. 500 ms).

5. **Suscripción al sensor**
   En un `useEffect`:

   - Fija el intervalo: `Accelerometer.setUpdateInterval(100)`.
   - `Accelerometer.addListener` para recibir `{ x, y, z }`.
   - Calcula `totalForce = √(x²+y²+z²)`.
   - Si `totalForce > THRESHOLD` y han pasado > `SHAKE_DELAY` ms desde `lastShake`:

     - Actualiza `lastShake = Date.now()`.
     - Incrementa `shakeCount`.
     - Si `shakeCount` alcanza 10 → `Alert.alert("¡Ganaste!", ...)` y reinicia contador.

6. **Limpieza**
   Al desmontar, `subscription.remove()`.

7. **Render**
   Muestra en pantalla:

   - Título (“💥 Sacude el Teléfono”)
   - Contador de sacudidas
   - Pista (“Llega a 10 para ganar”)

---

## 5. Ejercicio con **Podometer**

---

Usar el podometer para contar pasos.

### 🔹 Pasos:

1. Verifica si el sensor de podómetro está disponible en el dispositivo (Pedometer.isAvailableAsync()) y muestralo en la pantalla.
2. Suscribirse para recibir datos en tiempo real Pedometer.watchStepCount.
3. Mostrar los datos en pantallla

---

```tsx
import { Pedometer } from "expo-sensors";

// Mostrar los datos de pasos dados en tiempo real  en la pantalla.
```

## 🧪 5. **Ejercicio Final: Sensor Dashboard**

### 🎯 Objetivo

Mostrar un panel en tiempo real que combine:

- Acelerómetro → Para inclinación.
- Giroscopio → Para rotación.
- Magnetómetro → Para dirección norte.

### 🔹 Lo que vas a lograr

Un componente que simula un "dashboard" de movimiento para pruebas de hardware, juegos o visualizaciones.

---
