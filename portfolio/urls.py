from django.conf.urls import include, url
from django.contrib import admin
import pages.views

urlpatterns = [
    # Examples:
    # url(r'^$', 'portfolio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^django_admin/', include(admin.site.urls)),
    url(r'(index)?^$', pages.views.index)
]
