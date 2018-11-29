import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({ok: true, mensajes: 'GET QAP'});

});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({ok: true, mensajes: 'POST QAP', cuerpo, de});

});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    //parametro desde url
    const id = req.params.id;

    res.json({ok: true, mensajes: 'POST QAP', cuerpo, de, id});

});

export default router;