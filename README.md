flowchart TD
    User[User] -->|image, parameters| P1
    P1[0.1: Handle Image Upload] -->|validated_image| P2
    P2[0.2: Process Image with CAE] -->|processed_data| P3
    P3[0.3: Generate Results] -->|processed_image, metrics, download_link| User
    
    P1 -->|image_metadata| D2
    P2 -->|processed_image_metadata| D2
    P3 -->|output_image_path| D2
    
    P1 -->|job_data| D3
    P2 -->|job_status| D3
    P3 -->|job_completion| D3
    
    P1 -->|upload_log| D4
    P2 -->|processing_log| D4
    P3 -->|output_log| D4
    
    Admin[Administrator] -->|user_management_command| P4
    P4[0.4: Manage Users & Logs] -->|user_management_response| Admin
    P4 -->|user_data| D1
    P4 -->|user_management_log| D4
    
    Admin -->|monitor_command| P5
    P5[0.5: Monitor System] -->|system_status| Admin
    P5 -->|read job_data| D3
    P5 -->|read log_data| D4
    
    subgraph Data Stores
        D1[(D1: UserDB)]
        D2[(D2: ImageDB)]
        D3[(D3: JobQueue)]
        D4[(D4: AuditLogs)]
    end
