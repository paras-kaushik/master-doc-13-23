![](2023-06-09-12-05-20.png)
![](2023-06-09-12-03-34.png)
![](2023-06-09-12-06-33.png)
## Now our clinet is deployed and  load balancer(service we use to expose things to the outside world ) as a service is also running but it does not know what needs to be done we are going to have to map witht the routes

- we have created kind: service and kind: deployment now we will have to create kind : ingreess and we need to provide it RULES
![](2023-06-09-12-08-45.png)
- With ingress nginx controller you cannot have the same route with different http verbs, ngix only takes into account the URL not the verb
- ![](2023-06-09-12-27-10.png)
- ![](2023-06-09-12-32-55.png)
- ![](2023-06-09-12-34-17.png)

![](2023-06-09-12-38-22.png)
![](2023-06-09-12-41-14.png)


#
- DOCKER runs server at port 80
- ![](2023-06-09-12-44-50.png)

![](2023-06-09-12-48-55.png)
![](2023-06-09-12-50-17.png)

![](2023-06-09-12-52-49.png)
![](2023-06-09-12-56-07.png)
