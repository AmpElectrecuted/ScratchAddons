/* This is technically implemented in Scratch, there is just a separate link
   in the subforum page. This script replaces topic title with the unread link */

export default async function ({ addon, console }) {
    const containers = document.querySelectorAll('.tclcon');
    containers.forEach(container => {
        const links = container.querySelectorAll('a');
        links.forEach(link => {
            link.href += '/unread';
        });
    });

    const tclLinks = document.querySelectorAll('.tcl a');
    tclLinks.forEach(link => {
        if (!link.closest('.tclcon')) {
            link.remove();
        }
    });
  }
