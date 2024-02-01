import express from 'express'

const app = express()
const ip = '192.168.1.5'
const port = process.env.PORT || 8080
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
]
app.get('/', (req, res) => {
  //   console.log(req.headers)
  res.send('Hello World. Welcome to Earth')
})

app.get('/api/courses', (req, res) => {
  res.send(courses)
})
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => {
    return c.id === parseInt(req.params.id)
  })
  if (!course)
    res.status(400).send('The requested resourse is not available. 404 Error')
  res.send(course)
})

app.get('/api/posts/:month/:date/:year', (req, res) => {
  res.send(req.query)
  // res.send(req.params)
})

app.listen(port, ip, () => {
  console.log(`Listening to port ${port}`)
})
