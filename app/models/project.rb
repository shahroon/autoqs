class Project < ApplicationRecord
  belongs_to :user
  has_many_attached :files

  validates_presence_of :job_number
  validates_uniqueness_of :job_number, scope: :user_id
end
