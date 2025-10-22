# 🧩 Type Assertion in TypeScript

## What is Type Assertion?

Type Assertion in TypeScript is a way to **tell the compiler what the actual type of a value is**, when TypeScript can’t infer it correctly on its own.  

It doesn’t change the value or its runtime behavior — it only affects **how the compiler treats the type**.

Think of it like saying to TypeScript:  
> “Hey, I know better than you about this variable’s type.”

---

## Why We Use Type Assertion

We use Type Assertion when TypeScript’s type inference is too broad or uncertain.  
It helps us work confidently with values that have dynamic or unknown types.

Common use cases include:

1. **example 1**
   ```ts
   
