module FlashHelper
  def flash?
    flash.notice || flash.alert
  end
end
