```javascript
export const BASE_URL = "https://ai-interview-analyzer-9kva.onrender.com";

// Get Question (dummy for now)
export const getQuestion = async () => {
  return { question: "Tell me about yourself" };
};

// Submit Answer
export const submitAnswer = async (answer) => {
  try {
    const response = await fetch(`${BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      error: "Backend not reachable",
    };
  }
};
```
