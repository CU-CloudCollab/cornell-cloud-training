module Jekyll
  class YouTubeSlider < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
      @youtube_ids = @text.split(",")
    end

    def render(context)
      response = "<div class='container'>
                  <div class='col-md-8'>
                  <div id='myCarousel' class='carousel slide'>
                  <ol class='carousel-indicators'>"

      counter = 0
      cssClass="active"

      @youtube_ids.each do |i|
        ## Build indicators list
        response = response + "<li data-target='#myCarousel' data-slide-to='" + counter.to_s + "' class='" + cssClass + "'></li>"
        counter= counter+1
        cssClass=""
      end

      response = response +  "</ol>  <div class='carousel-inner'>"

      cssClass=" active"

      @youtube_ids.each do |i|
        response = response + "<div class='item" + cssClass + "'>
                                <iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + i.to_s + "' frameborder='0' allowfullscreen=''>
                                </iframe>
                              </div>"
        cssClass=""
      end

      response = response + "</div>
                  <a class='left carousel-control' href='#myCarousel' data-slide='prev'></a>
                  <a class='right carousel-control' href='#myCarousel' data-slide='next'></a>
                  </div>
                  </div>
                  </div>"
    end
  end
end

Liquid::Template.register_tag('youtube_slider', Jekyll::YouTubeSlider)
