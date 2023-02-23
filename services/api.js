import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://eoghzhoirwxndgahteml.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZ2h6aG9pcnd4bmRnYWh0ZW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwOTc3NDYsImV4cCI6MTk5MjY3Mzc0Nn0.82Q7LLnOe9Lt0CseBe-BNjWz0CglEM6vwHjiilCeMgU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZ2h6aG9pcnd4bmRnYWh0ZW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwOTc3NDYsImV4cCI6MTk5MjY3Mzc0Nn0.82Q7LLnOe9Lt0CseBe-BNjWz0CglEM6vwHjiilCeMgU"
    }
})