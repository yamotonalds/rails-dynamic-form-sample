class Item < ApplicationRecord
  belongs_to :product, inverse_of: :items
end
