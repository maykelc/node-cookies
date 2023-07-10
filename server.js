import  express  from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/setcookie', (req, res)=>{
    res.cookie('my cookie name', 'my cookie', {
        maxAge: 10000, // 10 segundos 
        httpOnly: true, // para "proteger la cookie", solo esta accesible cuando este revisando o realizando peticiones 
        secure: true, // permite acceder a la coockie solo cuando se usa https, importante activarlo en produccion
        sameSite: 'lax',//'strict'=para el mismo dominio, 'lax'=para distintos dominios  cuando el backend esta en otro dominio, restringe el uso de la cookie
        //expires: new Date("2023-12-31"),

    })
    res.send('Hello World Cookie!')
})


app.get('/getcookie', (req, res)=>{
    console.log(req.cookies)
    res.send('Reading cookies!')
})

app.get('/deletecookie', (req, res)=>{
    console.log(req.cookies)
    res.clearCookie('my cookie name')
    res.send('Reading cookies!')
})//elimina solo 1 a la vez segun lo que hay en res.clearCookie()

app.listen(3000)
console.log('server running on port 3000')