import express, { Router } from 'express'

const router = new Router({mergeParams: true})


router.get('/alive', (req, res) => {
    res.send(`Server alive: ${req.host}`)
})

router.get('/hello-world', (req, res, next) =>{
    res.json({message: 'Hello Worls1!11!'});
})

router.use((req, res, next) => {
    res.status(404).json({message: `No API hit with: ${req.url}`})
})

export default router