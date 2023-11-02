import { Router, Request, Response } from "express";
import { Example } from "../entities/example.entity";
import { dataSource } from "../app.data";
import { example,validation } from "../utilities/validation.utility";
import { canCount, canCreate, canDelete, canDeleteAll, canRead, canSearch, canUpdate } from "../controllers/data.controller";

let ExampleRepo = dataSource.getRepository(Example)

class ExampleRoute {
    constructor(app: Router) {
        app.route('/Example')
            .post(example, validation, this.create)
            .get(this.read)
            .put(example, validation, this.update)
            .delete(this.delete)
        app.get('/search-Example', this.search)
        app.post('/delete-all-data-Example', this.deleteAll)
        app.get('/count-data-Example', this.countData)
    }

    create(req: Request, res: Response) {
        const data = req.body;
        canCreate(data, res, ExampleRepo, 'Example created')
    }

    read(req: Request, res: Response) {
        const param = {
            offset: req.query.offset,
            limit: req.query.limit
        }
        canRead(param, res, ExampleRepo)
    }

    update(req: Request, res: Response) {
        console.log(req.body);
        const {id, city, countElecVote, gender, name, noUrut, photo, province, dapil, logoParties, nameParties, actionPolling, loading} = req.body
        canUpdate(id, {id, city, countElecVote, gender, name, noUrut, photo, province, dapil, logoParties, nameParties, actionPolling, loading}, res, ExampleRepo)
    }

    delete(req: Request, res: Response) {
        canDelete(req.body, res, ExampleRepo)
    }

    deleteAll(req: Request, res: Response) {
        canDeleteAll(res, ExampleRepo)
    }

    search(req: Request, res: Response) {
        const param = {
            like: req.query.like
        }

        const option = '(name, gender, city, noUrut, dapil, province, nameParties)'
        canSearch(option, param.like?.toString(), res, ExampleRepo)
    }

    countData(req: Request, res: Response) {
        canCount(res, ExampleRepo)
    }
}

export default ExampleRoute;