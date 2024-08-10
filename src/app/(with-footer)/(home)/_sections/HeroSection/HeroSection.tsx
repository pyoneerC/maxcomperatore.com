import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Clock from "~/components/Clock/Clock";
import ArgentinaFlag from "~/components/Svg/ArgentinaFlag"
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        Max Comperatore
      </h1>
      <h2 className={styles.subtitle}>
        {t("position")}
      </h2>

      <svg
        width="300"
        height="100"
        viewBox="55 235 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ textAlign: "center", margin: "0", padding: "0" }}
      >
        <path
          d="M65.55 244.519c9.52 7.426 18.577 14.556 27.805 21.454 4.829 3.609 14.544 5.07 20.22 3.585.967-.253 2.015-.318 3.02-.284 12.002.403 22.669-4.051 33.102-9.202 10.908-5.385 21.611-3.848 32.365.418 8.826 3.501 18.158 4.518 27.493 5.763 5.254.701 10.348 2.708 15.473 4.263 7.473 2.268 14.056 6.698 21.203 9.454 10.087 3.891 20.584 8.051 31.83 6.485 11.881-1.655 23.494-4.823 34.263-10.104 8.958-4.394 17.19-10.261 26.123-14.714 4.93-2.458 10.632-3.381 16.003-4.939 10.109-2.932 18.271 1.634 26.719 6.335 5.216 2.902 11.187 4.892 17.063 6.061 8.598 1.711 17.287 2.894 26.123 3.637 21.251 1.786 41.695-1.499 61.304-8.555 10.126-3.644 20.21-6.95 30.629-9.43.582-.138 1.114-.488 1.67-.74-.151.894-.002 2.286-.506 2.589-1.641.986-3.493 1.649-5.312 2.301-12.996 4.65-25.915 9.537-39.035 13.807-10.383 3.379-20.933 6.345-32.084 6.011-6.277-.187-12.577-.292-18.843.024-10.706.542-20.724-2.571-30.817-5.302-7.065-1.911-13.42-5.464-20.005-8.603-9.661-4.605-20.042-3.696-29.556 1.356-9.044 4.802-17.507 10.748-26.712 15.183-7.372 3.552-15.393 5.857-23.277 8.209-5.176 1.545-10.59 2.77-15.956 3.066-4.975.273-10.17-.316-15.009-1.546-5.832-1.483-11.419-3.969-17.06-6.154-10.15-3.931-20.246-7.998-30.405-11.904-1.363-.524-2.952-.52-4.447-.633-10.146-.764-20.044-2.272-29.498-6.532-8.702-3.921-17.477-4.146-26.626.068-8.542 3.934-17.547 7.539-26.723 9.139-4.66.813-9.798 2.861-15.269.862-4.859-1.775-10.505.336-15.728-1.87-4.892-2.066-9.151-4.778-13.062-8.31-7.042-6.36-14.352-12.398-22.914-16.687-7.984-3.998-22.298-2.118-29.246 3.546-2.648 2.158-5.615 4.072-8.727 5.435-1.148.503-3.131-.898-4.734-1.43.663-1.551.89-3.843 2.06-4.527 6.284-3.678 12.492-7.989 19.338-10.048 5.656-1.702 12.178-.897 18.283-.576 3.061.161 6.05 1.72 9.463 3.039Z"
          fill="#000"
        />
      </svg>

      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          {t.rich('subtitle', {
            em: (children) => <em>{children}</em>
          })}
        </p>
        <p className={styles.introSubtitle}>
          {t("location")}
          <ArgentinaFlag className={styles.flag} />
          <br />
          {/*<TimeDifference />*/}
          <Clock className={styles.clock} />
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button rounded="full" size="small" asChild className={styles.button}>
          <NextLink
            href="https://www.linkedin.com/in/maximo-comperatore-74399b278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.availableCircle}></span>
            {t("availability")}
          </NextLink>
        </Button>
      </div>
      <div className={styles.actions}>
        <Button className={styles.actionBtn} variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-file-download">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M12 17v-6" />
            <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
          </svg>
          <NextLink
            href="/assets/files/maximocomperatoreresume.pdf"
            target="_blank"
            prefetch={false}
          >
            {t("download")}
          </NextLink>
        </Button>
        <ContactDialog
          trigger={
            <Button className={styles.actionBtn} type="button">
              {t("contact")}
            </Button>
          }
        />
        <CopyEmailSmallButton className={styles.copyEmailButton} />
        <ScrollToTopButton />
      </div>
    </section>
  );
};
