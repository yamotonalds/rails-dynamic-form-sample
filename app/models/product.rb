class Product < ApplicationRecord
  has_many :items, inverse_of: :product, dependent: :destroy, autosave: true

  accepts_nested_attributes_for :items, allow_destroy: true, reject_if: :all_blank

  "this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text"
end
