import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    new SendEmailLogs(
      emailService,
      fileSystemLogRepository
    ).execute([
      "juancarlospetorres@gmail.com",
      "jovifan674@agaseo.com",
    ]);

    //   const emailService = new EmailService();
    //   emailService.sendEmail({
    //     to: "edjuniorpetorres@gmail.com",
    //     subject: "Prueba de automatización de correo",
    //     htmlBody: `
    //     <h1>Prueba de correo electrónico con imagen</h1>
    //     <p>Mis alitas ps.</p>
    //     <img src="https://i.pinimg.com/564x/09/38/ab/0938abcdeb5273e2e63072f570c0fbfb.jpg" alt="Descripción de la imagen">
    // `,
    //   });

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "http://google.com";
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    // });
  }
}
