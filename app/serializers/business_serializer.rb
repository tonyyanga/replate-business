# == Schema Information
#
# Table name: businesses
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
#  company_name           :string
#  phone                  :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  onfleet_id             :string
#  website_url            :string
#

class BusinessSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :company_name,
             :phone,
             :stripe_customer_id

  has_many :locations, serializer: DashboardLocationSerializer
end
