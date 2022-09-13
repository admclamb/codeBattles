import { API } from './API';

interface Payload {
  code: string;
  language: string;
  data_input: string;
  question_id: number | string;
  title: string;
}

export class ProblemsApi {
  static async checkSolution(payload: Payload) {
    const { title } = payload;
    return await API.post(`problems/${title}/checkSolution`, { data: payload });
  }
}
