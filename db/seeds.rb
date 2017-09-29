# frozen_string_literal: true

huku_tyoku_kin = Part.create(name: '腹直筋')
dai_kyou_kin = Part.create(name: '大胸筋')
jyou_wan_san_tou_kin = Part.create(name: '上腕三頭筋')
dai_tai_shitou_kin = Part.create(name: '大腿四頭筋')
chou_you_kin = Part.create(name: '腸腰筋')

crunch = Train.new(
  name: 'クランチ',
  detail: 'いわいる腹筋'
)

crunch.parts.push huku_tyoku_kin
crunch.save

squat = Train.new(
  name: 'スクワット',
  detail: '主に太ももを鍛えます'
)

squat.parts.push dai_tai_shitou_kin
squat.parts.push huku_tyoku_kin
squat.save

push_up = Train.new(
  name: 'プッシュアップ',
  detail: 'いわいる腕立て伏せ'
)

push_up.parts.push dai_kyou_kin
push_up.parts.push jyou_wan_san_tou_kin
push_up.save

narrow_push_up = Train.new(
  name: 'ナロープッシュアップ',
  detail: '両手をくっつけて行う腕立て伏せ，より腕まわり中心に鍛えることが可能'
)

narrow_push_up.parts.push jyou_wan_san_tou_kin
narrow_push_up.save

hip_raise = Train.new(
  name: 'ヒップレイズ',
  detail: '仰向けになり足を上にした状態からお尻を浮かせてキープさせるトレーニング'
)

hip_raise.parts.push huku_tyoku_kin
hip_raise.save

reg_raise = Train.new(
  name: 'レッグレイズ',
  detail: '仰向けの状態から，足をなるべく頭の近くまで持ってくるトレーニング'
)

reg_raise.parts.push huku_tyoku_kin
reg_raise.parts.push chou_you_kin
reg_raise.save

straight_reg_crunch = Train.new(
  name: 'ストレートレッグクランチ',
  detail: '足を椅子にのせ膝を曲げずに行うクランチ（腹筋）'
)

straight_reg_crunch.parts.push huku_tyoku_kin
straight_reg_crunch.save

sample = Menu.create(name: '私のトレーニング')

user = User.new(
  email: 'sample@hoge.com',
  password: 'hogehoge',
  password_confirmation: 'hogehoge'
)

user.save
user.ensure_authentication_token

UserTrain.create(
  user_id: user.id,
  train_id: crunch.id,
  count: 30,
  train_week_day: 6,
  set_count: 2
)
MenuTrain.create(
  menu_id: sample.id,
  train_id: crunch.id,
  user_id: user.id
)



UserTrain.create(
  user_id: user.id,
  train_id: squat.id,
  count: 30,
  train_week_day: 4,
  set_count: 2
)
MenuTrain.create(
  menu_id: sample.id,
  train_id: squat.id,
  user_id: user.id
)



UserTrain.create(
  user_id: user.id,
  train_id: push_up.id,
  count: 10,
  train_week_day: 2,
  set_count: 2
)
MenuTrain.create(
  menu_id: sample.id,
  train_id: push_up.id,
  user_id: user.id
)



UserTrain.create(
  user_id: user.id,
  train_id: hip_raise.id,
  count: 20,
  train_week_day:  0,
  set_count: 2
)
MenuTrain.create(
  menu_id: sample.id,
  train_id: hip_raise.id,
  user_id: user.id
)


TrainRecord.create(
  train_date: Time.parse('2017-08-05 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 20,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-05 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 22,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-06 17:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-06 19:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-08 22:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 15,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-08 23:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 15,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-10 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 16,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-10 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 16,
  set_number: 2
)



TrainRecord.create(
  train_date: Time.parse('2017-08-12 15:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 13,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-12 18:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 14,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-13 17:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-13 19:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 15,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-15 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 21,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-15 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 22,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-17 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 22,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-17 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 22,
  set_number: 2
)



TrainRecord.create(
  train_date: Time.parse('2017-08-19 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 25,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-19 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 26,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-20 17:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 27,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-20 19:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-22 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 17,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-22 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 32,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-24 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 22,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-24 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 32,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-25 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 5,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-25 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 8,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-27 17:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 17,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-27 19:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-29 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 30,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-29 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 30,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-08-31 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 31,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-08-31 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 32,
  set_number: 2
)

TrainRecord.create(
  train_date: Time.parse('2017-09-02 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 17,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-02 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-03 12:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 17,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-03 13:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-05 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-05 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 14,
  set_number: 2
)



TrainRecord.create(
  train_date: Time.parse('2017-09-07 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 18,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-07 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 19,
  set_number: 2
)





TrainRecord.create(
  train_date: Time.parse('2017-09-09 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-09 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 32,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-10 12:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 27,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-10 13:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-12 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-12 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 21,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-14 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 27,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-14 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 35,
  set_number: 2
)




TrainRecord.create(
  train_date: Time.parse('2017-09-16 10:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 37,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-16 11:00'),
  train_id: crunch.id,
  user_id: user.id,
  count: 38,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-18 12:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 27,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-10 13:00'),
  train_id: hip_raise.id,
  user_id: user.id,
  count: 12,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-12 14:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 11,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-12 15:00'),
  train_id: push_up.id,
  user_id: user.id,
  count: 21,
  set_number: 2
)


TrainRecord.create(
  train_date: Time.parse('2017-09-14 14:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 27,
  set_number: 1
)
TrainRecord.create(
  train_date: Time.parse('2017-09-14 15:00'),
  train_id: squat.id,
  user_id: user.id,
  count: 35,
  set_number: 2
)
