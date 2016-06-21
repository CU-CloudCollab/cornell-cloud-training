---
layout: track
order: 3
title:  "AWS Developer"
date:   2016-05-08 16:27:47 -0400
categories: aws developer
permalink: /training-track/aws-developer/
---

{% highlight ruby %}
def trackContent
  puts 'Introductions to tools you need to develop apps.'
  puts 'Bare minimum to put application (custom or vended) in the cloud.'
end
{% endhighlight %}

**Target Audience:** Developers

**Prerequisites:** Competency with materials covered in [Track: AWS Overview/General](../aws-overview/)


### Key Terms

{:dl .dl-horizontal}
Elastic Beanstalk
: This product allows the developer to deploy code to AWS without having to worry about infrastructure design.  Elastic Beanstalk will manage the compute nodes, load balancers, logging, alarms and even patching of the infrastructure.  Using this environment is a great way for a developer to get their feet wet in AWS.

Simple Storage Service
(S3)
: Amazon Simple Storage Service (Amazon S3), provides developers and IT teams with secure, durable, highly-scalable cloud storage. Amazon S3 is easy to use object storage, with a simple web service interface to store and retrieve any amount of data from anywhere on the web. With Amazon S3, you pay only for the storage you actually use. There is no minimum fee and no setup cost.<sup>1</sup>

Stateless Apps
: ... you should design applications that are stateless, meaning they do not store user assets or resources on the file system... <sup>2</sup>

#### Basic website hosting with S3

Basic websites without dynamic content (e.g., php, coldfusion) can be hosted using S3:

* [Getting Started: Hosting a Static Website on Amazon Web Services](https://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html) (article)
* [Static Website in S3 Using Certificate Manager & Cloudfront](https://www.youtube.com/watch?v=5uS_rQjQ4Hw) (video)
* [Static Sites using AWS S3, CloudFront, and Route 53](https://sysadmincasts.com/episodes/48-static-sites-using-aws-s3-cloudfront-and-route-53-1-5) (video)
* [Setup AWS Route 53 to work with Cornell managed DNS](https://blogs.cornell.edu/cloudification/2016/05/17/how-to-setup-aws-route53-to-work-with-cornell-managed-dns/) (article)

#### Web application hosting with Elastic Beanstalk

For more complex websites and applications that have dynamic content, Elastic Beanstalk is a simple way to move to AWS:

* [Getting Started Using Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html) (article)
* [Elastic Beanstalk Setup and Deployment](https://www.youtube.com/watch?v=rvxucBBDlPQ) (video)
* [Deploy, Manage, and Scale Your Apps with OpsWorks and Elastic Beanstalk](https://www.youtube.com/watch?v=WNLIsqjkvu8) (video)
* [Elastic Beanstalk Design Considerations](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.concepts.design.html) (article)
* [Language- and Framework-specific Tutorials and Samples](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html) (various)
* [Developer Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html) (various)

#### More cloud application design concepts and principles

The Elastic Beanstalk design considerations touch on principles of modern cloud application design - more resources:

* [AWS - Architecting for the Cloud: Best Practices](https://s3.amazonaws.com/awsmedia/AWS_Cloud_Best_Practices.pdf) (whitepaper)
* [IBM - Best practices for deploying your apps in the cloud](https://www.ibm.com/developerworks/cloud/library/cl-best-practices-deploying-apps-in-cloud/index.html) (whitepaper)
* [The Twelve-Factor App](http://12factor.net/) (manifesto)
* [Twelve-Factor Apps in Plain English](http://www.clearlytech.com/2014/01/04/12-factor-apps-plain-english/) (blog)

#### Learn More
* [AWS Development and Test](https://aws.amazon.com/dev-test/)

#### Cornell Resources
* [Cornell Docker Images](https://dtr.cucloud.net) (CU Registry)
  * For access contact [cloud-support@cornell.edu](cloud-support@cornell.edu)

#### SDKs and Examples
* [Ruby](https://github.com/awslabs/aws-ruby-sample) (Github & Examples)
* [Python](https://github.com/awslabs/aws-python-sample) (Github & Examples)
* [Java](https://github.com/awslabs/aws-java-sample) (Github & Examples)
* [.Net](https://github.com/awslabs/aws-sdk-net-samples) (Github & Examples)

#### Command line tools
* [AWS CLI for Mac/Linux](https://github.com/Wolg/awesome-swift) (Github & Examples)
* [AWS CLI for Windows (Powershell)](https://aws.amazon.com/documentation/powershell/) (Amazon HowTo)

#### IDE Toolkits
* [Eclipse Toolkit](https://aws.amazon.com/documentation/awstoolkiteclipse/) (Amazon HowTo)
* [Visual Studio Toolkit](https://aws.amazon.com/visualstudio/) (Amazon HowTo)

#### AWS Blogs for developers
* [.Net Community](http://blogs.aws.amazon.com/net/) (blog)
* [Ruby](http://ruby.awsblog.com/) (blog)
* [Java](http://java.awsblog.com/) (blog)
* [Application Management](http://blogs.aws.amazon.com/application-management) (blog)

---

##### References
1. [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/)
2. [http://www.ibm.com/developerworks/cloud/library/cl-best-practices-deploying-apps-in-cloud/index.html](http://www.ibm.com/developerworks/cloud/library/cl-best-practices-deploying-apps-in-cloud/index.html)
