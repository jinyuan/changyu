import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Idiom} from "../models/Idiom";
import {Difficulty} from "../models/Difficulty";

@Injectable({
  providedIn: 'root'
})
export class IdiomsService {
  idioms = new Array<Idiom>();

  constructor() {
    this.idioms.push(
      new Idiom('爱不释手'),
      new Idiom('按部就班'),
      new Idiom('百折不挠'),
      new Idiom('半途而废'),
      new Idiom('包罗万象'),
      new Idiom('变本加厉'),
      new Idiom('别出心裁'),
      new Idiom('宾至如归'),
      new Idiom('不可救药'),
      new Idiom('不劳而获'),
      new Idiom('不务正业'),
      new Idiom('不省人事'),
      new Idiom('不遗余力'),
      new Idiom('不择手段'),
      new Idiom('不自量力'),
      new Idiom('长年累月'),
      new Idiom('趁火打劫'),
      new Idiom('愁眉不展'),
      new Idiom('川流不息'),
      new Idiom('唇亡齿寒'),
      new Idiom('从容不迫'),
      new Idiom('措手不及'),
      new Idiom('打草惊蛇'),
      new Idiom('大刀阔斧'),
      new Idiom('大公无私'),
      new Idiom('道听途说'),
      new Idiom('得意忘形'),
      new Idiom('对牛弹琴'),
      new Idiom('发扬光大'),
      new Idiom('奋不顾身'),
      new Idiom('奉公守法'),
      new Idiom('各有千秋'),
      new Idiom('光明正大'),
      new Idiom('海底捞针'),
      new Idiom('好逸恶劳'),
      new Idiom('和睦共处'),
      new Idiom('狐假虎威'),
      new Idiom('胡思乱想'),
      new Idiom('胡作非为'),
      new Idiom('花言巧语'),
      new Idiom('画蛇添足'),
      new Idiom('家喻户晓'),
      new Idiom('见利忘义'),
      new Idiom('津津有味'),
      new Idiom('进退两难'),
      new Idiom('井井有条'),
      new Idiom('刻苦耐劳'),
      new Idiom('口是心非'),
      new Idiom('苦口婆心'),
      new Idiom('理直气壮'),
      new Idiom('力不从心'),
      new Idiom('了如指掌'),
      new Idiom('路不拾遗'),
      new Idiom('落花流水'),
      new Idiom('慢条斯理'),
      new Idiom('面目全非'),
      new Idiom('明目张胆'),
      new Idiom('默守成规'),
      new Idiom('普天同庆'),
      new Idiom('千篇一律'),
      new Idiom('情同手足'),
      new Idiom('人云亦云'),
      new Idiom('荣华富贵'),
      new Idiom('三思而行'),
      new Idiom('僧多粥少'),
      new Idiom('舍己为人'),
      new Idiom('事半功倍'),
      new Idiom('视死如归'),
      new Idiom('守望相助'),
      new Idiom('守株待兔'),
      new Idiom('熟能生巧'),
      new Idiom('水落石出'),
      new Idiom('似是而非'),
      new Idiom('滔滔不绝'),
      new Idiom('提心吊胆'),
      new Idiom('同甘共苦'),
      new Idiom('投机取巧'),
      new Idiom('图劳无功'),
      new Idiom('望尘莫及'),
      new Idiom('忘恩负义'),
      new Idiom('为非作歹'),
      new Idiom('无微不至'),
      new Idiom('相安无事'),
      new Idiom('心灰意懒'),
      new Idiom('兴高采烈'),
      new Idiom('袖手旁观'),
      new Idiom('鸦雀无声'),
      new Idiom('言行一致'),
      new Idiom('一败涂地'),
      new Idiom('一帆风顺'),
      new Idiom('一视同仁'),
      new Idiom('一事无成'),
      new Idiom('以卵击石'),
      new Idiom('以身作则'),
      new Idiom('易如反掌'),
      new Idiom('饮水思源'),
      new Idiom('迎刃而解'),
      new Idiom('有勇无谋'),
      new Idiom('执迷不悟'),
      new Idiom('趾高气扬'),
      new Idiom('纸上谈兵'),
      new Idiom('志同道合'),
      new Idiom('置之不理'),
      new Idiom('装聋作哑'),
      new Idiom('自暴自弃'),
      new Idiom('自力更生'),
      new Idiom('坐井观天'),
      new Idiom('爱屋及鸟'),
      new Idiom('百年树人'),
      new Idiom('班门弄斧'),
      new Idiom('标新立异'),
      new Idiom('重蹈覆辙'),
      new Idiom('德高望重'),
      new Idiom('耳濡目染'),
      new Idiom('风驰电掣'),
      new Idiom('凤毛麟角'),
      new Idiom('敷衍塞责'),
      new Idiom('功亏一篑'),
      new Idiom('画龙点睛'),
      new Idiom('居安思危'),
      new Idiom('开源节流'),
      new Idiom('脍炙人口'),
      new Idiom('明哲保身'),
      new Idiom('潛移默化'),
      new Idiom('束手无策'),
      new Idiom('温故知新'),
      new Idiom('信口开河'),
      new Idiom('忠言逆耳'),
      new Idiom('闭门造车'),
      new Idiom('不耻下问'),
      new Idiom('不攻自破'),
      new Idiom('不可思议'),
      new Idiom('不翼而飞'),
      new Idiom('出类拔萃'),
      new Idiom('吹毛求疵'),
      new Idiom('垂涎三尺'),
      new Idiom('从善如流'),
      new Idiom('大言不惭'),
      new Idiom('当机立断'),
      new Idiom('得寸进尺'),
      new Idiom('得过且过'),
      new Idiom('废寝忘食'),
      new Idiom('改过自新'),
      new Idiom('高瞻远瞩'),
      new Idiom('高枕无忧'),
      new Idiom('隔岸观火'),
      new Idiom('根深蒂固'),
      new Idiom('钩心斗角'),
      new Idiom('苟且偷安'),
      new Idiom('孤陋寡闻'),
      new Idiom('孤掌难鸣'),
      new Idiom('孤注一掷'),
      new Idiom('沽名钓誉'),
      new Idiom('古色古香'),
      new Idiom('拐弯抹角'),
      new Idiom('含辛茹苦'),
      new Idiom('好高务远'),
      new Idiom('挥金如土'),
      new Idiom('混水摸鱼'),
      new Idiom('鸡犬不宁'),
      new Idiom('集思广益'),
      new Idiom('假公济私'),
      new Idiom('见异思迁'),
      new Idiom('见义勇为'),
      new Idiom('捷足先登'),
      new Idiom('精益求精'),
      new Idiom('鞠躬尽瘁'),
      new Idiom('举一反三'),
      new Idiom('举足轻重'),
      new Idiom('开门见山'),
      new Idiom('慷慨解囊'),
      new Idiom('滥竽充数'),
      new Idiom('老马识途'),
      new Idiom('励精图治'),
      new Idiom('临渴掘井'),
      new Idiom('流离失所'),
      new Idiom('络绎不绝'),
      new Idiom('满载而归'),
      new Idiom('毛遂自荐'),
      new Idiom('每况愈下'),
      new Idiom('明知故犯'),
      new Idiom('目中无人'),
      new Idiom('弄巧反拙'),
      new Idiom('破釜沉舟'),
      new Idiom('杞人忧天'),
      new Idiom('千钧一发'),
      new Idiom('千载难逢'),
      new Idiom('前车之鉴'),
      new Idiom('强词夺理'),
      new Idiom('青出于蓝'),
      new Idiom('倾家荡产'),
      new Idiom('人浮于事'),
      new Idiom('任劳任怨'),
      new Idiom('如火如荼'),
      new Idiom('如释重负'),
      new Idiom('杀鸡取卵'),
      new Idiom('手不释卷'),
      new Idiom('守口如瓶'),
      new Idiom('水到渠成'),
      new Idiom('顺手牵羊'),
      new Idiom('司空见惯'),
      new Idiom('随遇而安'),
      new Idiom('挑拨离间'),
      new Idiom('挺而走险'),
      new Idiom('同归于尽'),
      new Idiom('同流合污'),
      new Idiom('同舟共济'),
      new Idiom('推陈出新'),
      new Idiom('未雨绸缪'),
      new Idiom('无病呻吟'),
      new Idiom('无动于衷'),
      new Idiom('五体投地'),
      new Idiom('息事宁人'),
      new Idiom('相辅相成'),
      new Idiom('心旷神怡'),
      new Idiom('欣欣向荣'),
      new Idiom('胸有成竹'),
      new Idiom('栩栩如生'),
      new Idiom('悬崖勒马'),
      new Idiom('削足适履'),
      new Idiom('寻根究底'),
      new Idiom('循循善诱'),
      new Idiom('雅俗共赏'),
      new Idiom('养尊处优'),
      new Idiom('摇摇欲坠'),
      new Idiom('一见如故'),
      new Idiom('一举两得'),
      new Idiom('一蹶不振'),
      new Idiom('一劳永逸'),
      new Idiom('一落千丈'),
      new Idiom('一毛不拔'),
      new Idiom('一目了然'),
      new Idiom('一暴十寒'),
      new Idiom('一网打尽'),
      new Idiom('一意孤行'),
      new Idiom('一针见血'),
      new Idiom('一知半解'),
      new Idiom('以牙还牙'),
      new Idiom('异想天开'),
      new Idiom('应接不暇'),
      new Idiom('优柔寡断'),
      new Idiom('游手好闲'),
      new Idiom('有目共睹'),
      new Idiom('与日俱增'),
      new Idiom('再接再厉'),
      new Idiom('蒸蒸日上'),
      new Idiom('真知灼见'),
      new Idiom('自投罗网'),
      new Idiom('自相矛盾'),
      new Idiom('坐享其成'),
    );
  }

    getIdioms(difficulty: Difficulty): Observable<Array<Idiom>> {
    const selectedIdioms = new Map<number, Idiom>();
      while (selectedIdioms.size !== difficulty.numOfIdioms) {
        let random = this.randomInteger(difficulty.startRange, difficulty.endRange);
        if(!selectedIdioms.has(random)) {
          selectedIdioms.set(random, this.idioms[random]);
        }
      }
      return of(Array.from(selectedIdioms.values()));
    }

    getDifficulties():Observable<Array<Difficulty>> {
      const difficulties = new Array<Difficulty>();
      difficulties.push(
        new Difficulty('Easy', 4, 180,0, 79),
        new Difficulty('Normal', 4, 120,80, 159),
        new Difficulty('Hard', 6, 120, 160, 249),
      );
      return of(difficulties);
    }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
