module ApplicationHelper
  def javascript_bundle_include_tag(url, options={})
    url = AssetManifest.asset_path(url)
    javascript_include_tag(url, options)
  end
end
