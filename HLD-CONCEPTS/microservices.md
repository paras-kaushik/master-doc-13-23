# MONOLITH
    - single codebase
    - same code might run on seperate machines- (can scale horizontally)
    - good for small teams - lesser moving parts
    - faster than a microservice as it uses the simple procedural call instead of Remote procedural calls which we have to use in microservices
    - here we have single point of failiure
# MIICROSERVICE
    - single buisness unit forms a single service
    - easier to scale but difficult to manage
    - parallel and multi-language development is easy

# How to move to microservices- different stratergies

- Strangler Pattern: Gradually replace parts of the monolith with microservices over time until the monolith is fully decomposed.

- Backend for Frontend (BFF): Create an intermediary backend service between frontend and monolith, gradually integrating microservices over time.

- API Gateway: Introduce an API gateway to route requests between clients and both monolith and microservices.

- Domain-Driven Design (DDD): Identify distinct domains in the monolith and extract them into separate microservices.

- Event-Driven Architecture: Implement event-driven communication to decouple parts of the monolith and enable microservices development.

# Communication mechanisms in microservices
## HTTP/RESTful APIs:
- HTTP/RESTful APIs are widely used for communication in microservices. Each service exposes a set of well-defined HTTP endpoints that other services can interact with to request data or trigger specific actions.
Popular Technologies: Spring Boot (Java), Express.js (Node.js), Django (Python), Flask (Python).
## Messaging Queues:
- Messaging queues enable asynchronous communication between microservices. Producers send messages to a queue, and consumers retrieve and process them when they are ready.
Popular Technologies: RabbitMQ, Apache Kafka, ActiveMQ, Amazon SQS.
## Message Brokers:
- Message brokers facilitate the communication between microservices by managing the routing and delivery of messages.A message broker typically incorporates one or more message queues as part of its functionalities.
Popular Technologies: RabbitMQ, Apache Kafka.
## gRPC (google Remote Procedure Calls):
- gRPC is a high-performance RPC framework that uses Protocol Buffers as the data serialization format and HTTP/2 as the transport protocol.
Popular Technologies: gRPC (supports multiple languages, including Java, C++, Python, and more).
## Event-Driven Architecture (EDA):
- In EDA, microservices communicate through events. One service publishes events, and others subscribe to them to react accordingly.
Popular Technologies: Apache Kafka, RabbitMQ, NATS, Amazon SNS (Simple Notification Service).
## GraphQL:
- GraphQL is a query language for APIs that allows clients to request specific data they need, reducing over-fetching and under-fetching.
Popular Technologies: Apollo Server (JavaScript/Node.js), GraphQL Java (Java), Graphene-Python (Python).
## WebSockets:
- WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time bidirectional communication.
Popular Technologies: Socket.IO (JavaScript/Node.js), Django Channels (Python), Flask-SocketIO (Python).
## Service Mesh:
- A service mesh is an infrastructure layer that handles communication between microservices, providing features like service discovery, load balancing, and traffic routing.
Popular Technologies: Istio, Linkerd, Consul.
## DNS-Based Service Discovery:
- Microservices register themselves with a DNS server, and others use DNS queries to discover their locations dynamically.
Popular Technologies: Kubernetes (K8s) with DNS-based service discovery.


### HTTP VS REST API
#### REST API (Representational State Transfer API):
- REST is an architectural style for designing networked applications, typically over the HTTP protocol. A REST API adheres to specific constraints and principles, such as statelessness, resource-based addressing, and the use of standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. It emphasizes using standard HTTP status codes and hypermedia links to represent the application's state transitions.

#### HTTP API (Hypertext Transfer Protocol API):
- An HTTP API, in a broader sense, refers to any API that uses the HTTP protocol as its communication mechanism. It encompasses both REST APIs (as described above) and other non-RESTful APIs that use HTTP for data exchange. HTTP APIs may not strictly adhere to the constraints and principles of REST but still operate over the HTTP protocol.

#### Key Differences:
The main difference lies in the design principles and constraints they follow:

##### Design Principles:

- REST API: Follows specific principles, such as resource-based addressing, statelessness, and hypermedia links.
HTTP API: Can include any API using the HTTP protocol, including RESTful and non-RESTful designs.
Uniform Interface:

- REST API: Has a standardized set of methods (GET, POST, PUT, DELETE) to interact with resources.
HTTP API: May or may not strictly adhere to these standardized methods.
Resource State Representation:

- REST API: Emphasizes representing resource states using standard formats like JSON or XML.
HTTP API: Can use various data formats, including JSON, XML, or even plain text.
# COMPONENTS OF MICROSERVICES
- Service Logic: This is the core component of a microservice and contains the actual business logic and functionality specific to the service's purpose. It encapsulates the service's operations and processes data as needed.

- API Gateway: The API gateway is the entry point for external clients to access the microservices. It handles requests from clients and forwards them to the appropriate microservices. The API gateway can perform tasks like authentication, rate limiting, request/response transformation, and load balancing.

- Service Interface: The service interface defines the communication contract for the microservice. It specifies the endpoints, methods, and data formats (e.g., JSON, XML) used for communication between the microservice and its clients.

- Service Registry: In a distributed microservices environment, the service registry acts as a central repository that maintains the addresses of all the running microservices. It enables service discovery, allowing microservices to find and communicate with each other dynamically.

- Database/Storage: Each microservice often has its own dedicated database or data store to manage its data independently. This isolation helps avoid data coupling and improves scalability.

- Message Broker/Queue: For asynchronous communication and event-driven architectures, microservices may use a message broker or a message queue. This component facilitates the exchange of messages between microservices without direct coupling.

- Event Bus: An event bus is a central communication channel that allows microservices to publish and subscribe to events. It facilitates loose coupling and enables event-driven communication between services.

- Security: Microservices often include security components such as authentication and authorization to ensure that only authorized clients can access the services and perform specific actions.

- Monitoring and Logging: Each microservice generates logs and metrics to monitor its performance, health, and behavior. Centralized logging and monitoring systems help track and troubleshoot issues across the entire microservices ecosystem.

- Configuration Management: Configuration management handles the dynamic configuration of microservices, allowing them to adapt to changes without requiring redeployment.

- Resilience and Fault Tolerance: Components responsible for resilience and fault tolerance implement mechanisms like circuit breakers, timeouts, retries, and fallback strategies to ensure the overall system can withstand failures and recover gracefully.

- Load Balancer: In cases where multiple instances of a microservice are deployed, a load balancer evenly distributes incoming requests across these instances, ensuring efficient resource utilization and scalability.

- Containerization/Orchestration: In many microservices setups, containerization tools like Docker and container orchestration platforms like Kubernetes are used to package, deploy, and manage microservices.

- Service Monitoring and Management: This component includes tools and processes to monitor the health and performance of microservices, allowing operators to ensure their reliability and availability.


# LOAD BALACING ALGORITHMS
0. Random: Requests are sent to a randomly selected server in the pool. This algorithm is simple but may not be optimal for all scenarios.
1. Round Robin: Requests are distributed sequentially to each server in the pool. The load balancer cycles through the servers in a circular manner.
2. Weighted Round Robin: Similar to Round Robin, but each server is assigned a weight. Servers with higher weights receive more requests than those with lower weights.
3. Least Connections: The load balancer routes new requests to the server with the fewest active connections. It aims to distribute load based on the current server's connection count.
4. Weighted Least Connections: Servers with higher weights are preferred, but the load balancer still chooses the server with the fewest active connections among those with the highest weight.
5. IP Hash: The load balancer uses the client's IP address to calculate a hash, and the request is sent to the server identified by the hash result. This ensures that a particular client always goes to the same server. good when we are handling statefull connections
6. Least Response Time: The load balancer measures the response times of each server and routes the new request to the server with the lowest response time.
7. Chaff: The load balancer generates "fake" requests (chaff) and intersperses them with real requests to evenly distribute load and avoid performance spikes.
8. Session-based Affinity/Sticky Sessions: The load balancer uses a unique identifier (e.g., session ID or cookie) to ensure that a client's requests consistently go to the same server for the duration of a session.
7. Consistent Hashing: Servers and clients are mapped to a hash ring, and the load balancer selects the server corresponding to the hashed value of the client's request key. It provides better load distribution during server additions or removals.
    ## LOAD BALANCING IMPLEMENTATION
    1. Round Robin:
        - Data Structure: Array or Circular Queue
        - Implementation: The list of servers is stored in an array or circular queue, and an index is used to keep track of the next server to be selected. The index is incremented with each request, and modulo operation is used to cycle through the list.
    2. Weighted Round Robin:
        - Data Structure: Array or Circular Queue with Weights
        - Implementation: Similar to Round Robin, but each server is associated with a weight, stored alongside the server in the array or queue. The index is incremented based on the server's weight, allowing servers with higher weights to receive more requests.
    4. Least Connections:
        - Data Structure: Min Heap or Priority Queue
        - Implementation: The current number of active connections for each server is maintained in a min heap or priority queue. When a new request arrives, the server with the minimum number of connections (i.e., the root of the heap) is selected.
    5. Weighted Least Connections:

        - Data Structure: Min Heap or Priority Queue with Weights
        - Implementation: Similar to Least Connections, but each server's weight is considered when comparing the number of active connections. The heap maintains servers based on their weighted connection count.
    6. IP Hash:

        - Data Structure: Hash Table
        - Implementation: The load balancer uses a hash table to store the mapping of client IP addresses to the selected server. When a request comes in, the client's IP address is hashed, and the resulting value is used to look up the corresponding server.
    7. Least Response Time:
        - Data Structure: Real-time Metrics (e.g., Response Time History)
        - Implementation: The load balancer tracks real-time response times of each server. When a request arrives, it selects the server with the lowest recorded response time, which may be stored in a data structure like a history buffer or circular array.

    8. Session-based Affinity/Sticky Sessions:
        - Data Structure: Hash Table or Distributed Cache
        - Implementation: The load balancer uses a hash table or distributed cache to store the mapping of client session IDs or cookies to the selected server. Subsequent requests with the same session ID or cookie are routed to the same server.
        Consistent Hashing:

    9. Data Structure: Hash Ring (e.g., Circular Hash Table)
        - Implementation: Servers and clients are mapped to a hash ring using consistent hashing. The client's request key is hashed, and the hashed value is used to determine the server from the hash ring for request routing.
