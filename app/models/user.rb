# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  authentication_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :menu_trains
  has_many :train_records
  has_many :menus, through: :menu_trains

  validates :authentication_token, uniqueness: true, allow_nil: true

  def ensure_authentication_token
    authentication_token || generate_authentication_token
  end

  def generate_authentication_token
    loop do
      old_token = authentication_token
      token = SecureRandom.urlsafe_base64(24).tr('lIO0', 'sxyz')
      break token if update!(authentication_token: token)
    end
  end

  def delete_authentication_token
    update(authentication_token: nil)
  end
end
