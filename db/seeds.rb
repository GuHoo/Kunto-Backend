# frozen_string_literal: true

system('bin/rails db:migrate:reset')

hukkin = Part.create(name: '腹筋')
kyoukin = Part.create(name: '胸筋')
jyouwannitoukin = Part.create(name: '上腕二頭筋')

kuranti = Train.new(name: 'クランチ', detail: '一般的な腹筋トレーニング')

kuranti.parts.push hukkin
kuranti.parts.push kyoukin
kuranti.parts.push jyouwannitoukin

kuranti.save

sample = Menu.create(name: 'サンプルトレーニング')

user = User.new(email: 'sample@hoge.com', password: 'hogehoge', password_confirmation: 'hogehoge')

MenuTrain.create(menu_id: sample.id, train_id: kuranti.id, user_id: user.id)
