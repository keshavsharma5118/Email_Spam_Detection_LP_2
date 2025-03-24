import sys
import joblib

# Load the saved model and vectorizer
model = joblib.load("naive_bayes_model.joblib")
vectorizer = joblib.load("tfidf_vectorizer.joblib")

# Get the input text from command-line arguments
email_text = sys.argv[1]

# Transform the input using the vectorizer
input_features = vectorizer.transform([email_text])

# Predict
prediction = model.predict(input_features)[0]

# Print the result (so Node.js can read it)
print("Spam" if prediction == 1 else "Not Spam")
