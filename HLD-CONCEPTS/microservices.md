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
- HTTP/RESTful API:
    - Microservices communicate over HTTP using RESTful APIs. Popular frameworks for building RESTful APIs in microservices include Express.js (Node.js), Spring Boot (Java), Django (Python), and Ruby on Rails (Ruby).

- gRPC:
    - gRPC is a specific implementation of RPC developed by Google. It uses Protocol Buffers (protobuf) for data serialization and HTTP/2 as the transport protocol. gRPC is widely used for efficient communication between microservices and is commonly used in combination with Node.js, Java, C++, and other programming languages.Different languages can talk to each other
    - it uses HTTP2

- Apache Kafka:
    - Kafka is a distributed messaging system used for building real-time data pipelines and streaming applications. It is commonly used as a communication mechanism in microservices architectures for event-driven communication

- RabbitMQ:
    - RabbitMQ is a message broker that facilitates asynchronous messaging between microservices. It supports multiple messaging patterns like publish-subscribe and point-to-point communication.

- WebSocket:
    -  WebSockets provide bidirectional, full-duplex communication channels between microservices. They are often used for real-time communication in applications like chat systems and online gaming.

- Amazon SQS:
    - Amazon Simple Queue Service (SQS) is a fully managed message queuing service provided by AWS. It allows microservices to communicate asynchronously through message queues.

- NATS:
    - NATS is a lightweight, high-performance messaging system that supports publish-subscribe and request-reply communication patterns. It is designed for simplicity and scalability.

- Istio (Service Mesh):
    - Istio is a popular service mesh that provides advanced communication features for microservices, including traffic management, load balancing, circuit breaking, and observability.
