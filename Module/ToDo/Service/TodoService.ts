import {TODO_API} from "@/Module/ToDo/Constant";
import { GET, BaseService, Response } from "ts-retrofit";
import {HttpService} from "@/Module/Http/Service";
import {IToDoItem} from "@/Module/ToDo/Model/DataModel";
class UserService extends BaseService {
    @GET(TODO_API.GET_LIST)
    async getList(): Promise<Response<Array<IToDoItem>>> { return <Response<Array<IToDoItem>>> {} };
}

export default HttpService.build(UserService)
