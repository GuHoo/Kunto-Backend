class CreateTrains < ActiveRecord::Migration[5.1]
  def change
    create_table :trains do |t|
      t.string :name, null: false
      t.text :detail, null: false, default: ''

      t.timestamps
    end
  end
end
