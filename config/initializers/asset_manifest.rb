class AssetManifest
  class << self
    def manifest
      manifest_filename = "assets/manifest/#{kind}.json"
      if File.exists?(manifest_filename)
        @manifest ||= JSON.parse(File.read(manifest_filename))
      end
    end

    def asset_path(url)
      if manifest
        manifest[url] || url
      else
        url
      end
    end

    def kind
      return "production" if %w( production staging ).include? Rails.env
      "development"
    end
  end
end
