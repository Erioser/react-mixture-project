

export let lotteryTypes = {
  "reason": "查询成功",
  "result": [
      {
          "lottery_id": "ssq",
          "lottery_name": "双色球",
          "lottery_type_id": "1",
          "remarks": "每周二、四、日开奖"
      },
      {
          "lottery_id": "dlt",
          "lottery_name": "超级大乐透",
          "lottery_type_id": "2",
          "remarks": "每周一、三、六开奖"
      },
      {
          "lottery_id": "qlc",
          "lottery_name": "七乐彩",
          "lottery_type_id": "1",
          "remarks": "每周一、三、五开奖"
      },
      {
          "lottery_id": "fcsd",
          "lottery_name": "福彩3D",
          "lottery_type_id": "1",
          "remarks": "每日开奖"
      },
      {
          "lottery_id": "qxc",
          "lottery_name": "七星彩",
          "lottery_type_id": "2",
          "remarks": "每周二、五、日开奖"
      },
      {
          "lottery_id": "pls",
          "lottery_name": "排列3",
          "lottery_type_id": "2",
          "remarks": "每日开奖"
      },
      {
          "lottery_id": "plw",
          "lottery_name": "排列5",
          "lottery_type_id": "2",
          "remarks": "每日开奖"
      }
  ],
  "error_code": 0
}

export let detail = {
    "reason": "查询成功",
    "result": {
        "lottery_id": "ssq",
        "lottery_name": "双色球",
        "lottery_res": "03,08,11,14,18,23,16",
        "lottery_no": "18028",
        "lottery_date": "2018-03-13",
        "lottery_exdate": "2018-05-11",
        "lottery_sale_amount": "352,015,830",
        "lottery_pool_amount": "578,094,167",
        "lottery_prize": [
            {
                "prize_name": "一等奖",
                "prize_num": "7",
                "prize_amount": "7,676,997",
                "prize_require": "6+1"
            },
            {
                "prize_name": "二等奖",
                "prize_num": "220",
                "prize_amount": "106,471",
                "prize_require": "6+0"
            },
            {
                "prize_name": "三等奖",
                "prize_num": "1869",
                "prize_amount": "3,000",
                "prize_require": "5+1"
            },
            {
                "prize_name": "四等奖",
                "prize_num": "82708",
                "prize_amount": "200",
                "prize_require": "5+0,4+1"
            },
            {
                "prize_name": "五等奖",
                "prize_num": "1493643",
                "prize_amount": "10",
                "prize_require": "4+0,3+1"
            },
            {
                "prize_name": "六等奖",
                "prize_num": "8341565",
                "prize_amount": "5",
                "prize_require": "2+1,1+1,0+1"
            }
        ]
    },
    "error_code": 0
}

export let bonus = {
    "reason": "执行成功",
    "result": {
        "lottery_id": "ssq",
        "lottery_name": "双色球",
        "lottery_no": "18029",
        "lottery_date": "2018-03-15",
        "real_lottery_res": "01,02,09,14,22,25,05",
        "lottery_res": "01,11,02,09,14,22,25|05,03",
        "in_money": "28",
        "buy_red_ball_num": "7",
        "buy_blue_ball_num": "2",
        "hit_red_ball_num": "6",
        "hit_blue_ball_num": "1",
        "is_prize": "1",
        "prize_msg": "恭喜您中奖了",
        "lottery_prize": [
            {
                "prize_name": "一等奖",
                "prize_require": "6+1",
                "prize_num": "1",
                "prize_money": "8,926,329"
            },
            {
                "prize_name": "二等奖",
                "prize_require": "6+0",
                "prize_num": "1",
                "prize_money": "288,700"
            },
            {
                "prize_name": "三等奖",
                "prize_require": "5+1",
                "prize_num": "6",
                "prize_money": "3,000"
            },
            {
                "prize_name": "四等奖",
                "prize_require": "4+1,5+0",
                "prize_num": "6",
                "prize_money": "200"
            }
        ]
    },
    "error_code": 0
}