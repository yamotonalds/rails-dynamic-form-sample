class Product < ApplicationRecord
  has_many :items, inverse_of: :product, dependent: :destroy, autosave: true
end
