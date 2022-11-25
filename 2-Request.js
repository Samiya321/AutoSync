var obj = JSON.parse($response.body);

obj = {

  "hook_location" : "onboarding_tos_accepted",
  "user_info" : {
    "nps_survey_displayed_count" : 0,
    "saved_photo_count" : 0,
    "enhanced_photo_count" : 0,
    "enhanced_video_count" : 0,
    "in_app_survey_displayed_count" : 0,
    "shared_photo_count" : 0
  },
  "experiments" : {
    "deferred_triggers_for_paywalls" : 2,
    "video_enhance_2" : 1,
    "activation_threshold_cross_check_all_prices" : 1,
    "enhance_confirmation_popup_style" : 0,
    "comparison_paywall_type" : 1,
    "satisfaction_survey_frequency_old_users" : 3,
    "skip_free_trial_alert_old_users" : 3,
    "widget_smart_suggestion_old_users" : 3
  }
}
$done({body: JSON.stringify(obj)});