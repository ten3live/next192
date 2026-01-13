import React from 'react'

const page = async() => {
  const data=
     {"to": "ten3live@gmail.com",
    "subject": "Plunk SMTP Test",
    "html": "<h2>Hello Sajjad 👋</h2><p>Email sent using Plunk SMTP.</p>"}
  
const res = await fetch('http://localhost:3000/api/sendemail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${process.env.PLUNK_API_KEY}`
  },
  body: JSON.stringify(data),
});

if (!res.ok) throw new Error('Failed to fetch');
const result = await res.json();
  return (
    <div>page</div>
  )
}

export default page