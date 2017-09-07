# frozen_string_literal: true

system('bin/rails db:migrate:reset')

hukkin = Part.create(name: '腹筋')
kyoukin = Part.create(name: '胸筋')
jyouwannitoukin = Part.create(name: '上腕二頭筋')

crunch = Train.new(name: 'クランチ', detail: '一般的な腹筋トレーニング')

crunch.parts.push hukkin
crunch.parts.push kyoukin
crunch.parts.push jyouwannitoukin

crunch.save

sample = Menu.create(name: 'サンプルトレーニング')

user = User.new(email: 'sample@hoge.com', password: 'hogehoge', password_confirmation: 'hogehoge')

UserTrain.create(user_id: user.id, train_id: crunch.id, count: 100)

MenuTrain.create(menu_id: sample.id, train_id: crunch.id, user_id: user.id)
